import path from "node:path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import type { ProtoGrpcType } from "./proto/random";
import type { RandomHandlers } from "./proto/randompackage/Random";
import type{ TodoResponse } from "./proto/randompackage/TodoResponse";

const PORT = 8082;

const PROTO_FILE = "./proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObj = grpc.loadPackageDefinition(
	packageDef,
) as unknown as ProtoGrpcType;

const randomPackage = grpcObj.randompackage;

function main() {
	const server = getServer();
	server.bindAsync(
		`0.0.0.0:${PORT}`,
		grpc.ServerCredentials.createInsecure(),
		(err, port) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(`Server running at http://0.0.0.0:${PORT}`);
			server.start();
		},
	);
}
const todoList:TodoResponse={todos:[]}
function getServer() {
	const server = new grpc.Server();
	server.addService(randomPackage.Random.service, {
		PingPong: (req, res) => {
			console.log(req.request);
			res(null, { message: "Pong" });
		},
		RandomNumbers: (call) => {
			const { maxVal = 10 } = call.request;

			console.log(maxVal);
			let count = 0;

			const id = setInterval(() => {
				count = ++count;
				call.write({ num: Math.floor(Math.random() * maxVal) });
				if (count >= 10) {
					clearInterval(id);
					call.end();
				}
			}, 500);
		},
		TodoList: (call,callback) => {
			call.on("data", (req) => {
				console.log(req);
				todoList?.todos?.push(req);
			});
			call.on("end", () => {
				callback(null,{todos:todoList?.todos});
			});
			
		},
	} as RandomHandlers);
	return server;
}

main();
