/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { ClientController } from './clientController'
import { ClientService } from './clientService'


@Module({
  imports: [],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}