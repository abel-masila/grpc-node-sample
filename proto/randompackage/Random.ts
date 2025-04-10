// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _randompackage_ChatRequest, ChatRequest__Output as _randompackage_ChatRequest__Output } from '../randompackage/ChatRequest';
import type { ChatResponse as _randompackage_ChatResponse, ChatResponse__Output as _randompackage_ChatResponse__Output } from '../randompackage/ChatResponse';
import type { NumberRequest as _randompackage_NumberRequest, NumberRequest__Output as _randompackage_NumberRequest__Output } from '../randompackage/NumberRequest';
import type { NumberResponse as _randompackage_NumberResponse, NumberResponse__Output as _randompackage_NumberResponse__Output } from '../randompackage/NumberResponse';
import type { PingRequest as _randompackage_PingRequest, PingRequest__Output as _randompackage_PingRequest__Output } from '../randompackage/PingRequest';
import type { PongResponse as _randompackage_PongResponse, PongResponse__Output as _randompackage_PongResponse__Output } from '../randompackage/PongResponse';
import type { TodoRequest as _randompackage_TodoRequest, TodoRequest__Output as _randompackage_TodoRequest__Output } from '../randompackage/TodoRequest';
import type { TodoResponse as _randompackage_TodoResponse, TodoResponse__Output as _randompackage_TodoResponse__Output } from '../randompackage/TodoResponse';

export interface RandomClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randompackage_ChatRequest, _randompackage_ChatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randompackage_ChatRequest, _randompackage_ChatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randompackage_ChatRequest, _randompackage_ChatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randompackage_ChatRequest, _randompackage_ChatResponse__Output>;
  
  PingPong(argument: _randompackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randompackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randompackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randompackage_PingRequest, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randompackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randompackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randompackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randompackage_PingRequest, callback: grpc.requestCallback<_randompackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _randompackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randompackage_NumberResponse__Output>;
  RandomNumbers(argument: _randompackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randompackage_NumberResponse__Output>;
  randomNumbers(argument: _randompackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randompackage_NumberResponse__Output>;
  randomNumbers(argument: _randompackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randompackage_NumberResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_randompackage_TodoResponse__Output>): grpc.ClientWritableStream<_randompackage_TodoRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_randompackage_ChatRequest__Output, _randompackage_ChatResponse>;
  
  PingPong: grpc.handleUnaryCall<_randompackage_PingRequest__Output, _randompackage_PongResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_randompackage_NumberRequest__Output, _randompackage_NumberResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_randompackage_TodoRequest__Output, _randompackage_TodoResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_randompackage_ChatRequest, _randompackage_ChatResponse, _randompackage_ChatRequest__Output, _randompackage_ChatResponse__Output>
  PingPong: MethodDefinition<_randompackage_PingRequest, _randompackage_PongResponse, _randompackage_PingRequest__Output, _randompackage_PongResponse__Output>
  RandomNumbers: MethodDefinition<_randompackage_NumberRequest, _randompackage_NumberResponse, _randompackage_NumberRequest__Output, _randompackage_NumberResponse__Output>
  TodoList: MethodDefinition<_randompackage_TodoRequest, _randompackage_TodoResponse, _randompackage_TodoRequest__Output, _randompackage_TodoResponse__Output>
}
