import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ChangeNameEvent,
  TranstringsferEvent
} from "../generated/Transfer/Transfer"

export function createChangeNameEventEvent(name: string): ChangeNameEvent {
  let changeNameEventEvent = changetype<ChangeNameEvent>(newMockEvent())

  changeNameEventEvent.parameters = new Array()

  changeNameEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeNameEventEvent
}

export function createTranstringsferEventEvent(
  from: Address,
  to: Address,
  amount: BigInt
): TranstringsferEvent {
  let transtringsferEventEvent = changetype<TranstringsferEvent>(newMockEvent())

  transtringsferEventEvent.parameters = new Array()

  transtringsferEventEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transtringsferEventEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transtringsferEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transtringsferEventEvent
}
