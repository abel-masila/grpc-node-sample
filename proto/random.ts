import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _randompackage_RandomClient, RandomDefinition as _randompackage_RandomDefinition } from './randompackage/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  randompackage: {
    NumberRequest: MessageTypeDefinition
    NumberResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    Random: SubtypeConstructor<typeof grpc.Client, _randompackage_RandomClient> & { service: _randompackage_RandomDefinition }
    TodoRequest: MessageTypeDefinition
    TodoResponse: MessageTypeDefinition
  }
}

