import path from "node:path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import type { ProtoGrpcType } from "./proto/random";

import readline from "node:readline";

const PORT = 8082;

const PROTO_FILE = "./proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObj = grpc.loadPackageDefinition(
	packageDef,
) as unknown as ProtoGrpcType;

const randomPackage = grpcObj.randompackage.Random;

const client = new randomPackage(
	`0.0.0.0:${PORT}`,
	grpc.credentials.createInsecure(),
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

client.waitForReady(deadline, (err) => {
	if (err) {
		console.error(err);
		return;
	}
	onClientReady();
});

function onClientReady() {
	// client.PingPong({message: "Ping"}, (err, response) => {
	//     if(err){
	//         console.error(err);
	//         return;
	//     }
	//     console.log(response);
	// });
	// const stream= client.RandomNumbers({maxVal: 85})
	// stream.on('data', (response) => {
	//     console.log(response);
	// });
	// stream.on('end', () => {
	//     console.log('Stream ended');
	// });
	// const sampleTodos = [
	//     { todo: "Buy groceries", status: "pending" },
	//     { todo: "Walk the dog", status: "completed" },
	//     { todo: "Read a book", status: "pending" },
	//     { todo: "Call mom", status: "pending" },
	//     { todo: "Pay bills", status: "completed" },
	//     { todo: "Exercise", status: "pending" },
	//     { todo: "Write code", status: "completed" },
	//     { todo: "Clean house", status: "pending" }
	// ];

	// const stream = client.TodoList((err, response) => {
	//     if(err){
	//         console.error(err);
	//         return;
	//     }
	//     console.log(response);
	// });

	// // Send 8 random todos
	// for(let i = 0; i < 8; i++) {
	//     const randomIndex = Math.floor(Math.random() * sampleTodos.length);
	//     stream.write(sampleTodos[randomIndex]);
	// }

	// stream.end();
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

    const username = process.argv[2];
    if (!username) {
        console.log("Please provide a username");
        process.exit(1);
    }

	const metadata = new grpc.Metadata();
	metadata.set("username", username);

	const call = client.Chat(metadata);
	call.write({ message: "Register" });

    call.on("data",(response)=>{
        console.log(`${response.usernmame} ==> ${response.message}`);
    })
	rl.on("line", (line) => {
		if (line === "quit") {
			call.end();
			//rl.close();
		} else {
			call.write({ message: line });
		}
	});
}
