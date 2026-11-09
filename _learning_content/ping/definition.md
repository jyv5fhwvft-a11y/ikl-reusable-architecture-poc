
---
id: IKL-CN-001-CB-01
concept_id: IKL-CN-001
section_id: IKL-CN-001-SEC-01
section_number: 1
section_title: Identity and Definition
block_type: definition
order: 1
---

# What is Ping?

## Simple definition

Ping is a network diagnostic utility that helps us check whether another device or destination can be reached across an IP network.

It sends a message called an ICMP Echo Request and waits for an ICMP Echo Reply.

If a reply is received, Ping reports information such as the round-trip time.

## First-grader explanation

Imagine calling a friend on the telephone.

You say, "Are you there?"

Your friend answers, "Yes, I'm here!"

Ping works in a similar way. Your computer sends a message to another computer and waits for a response.

If the response arrives, you know that the destination was reachable and responded to your test.

## Analogy

Think of Ping as knocking on someone's door.

- You knock on the door: Echo Request.
- The person hears the knock.
- The person knocks back: Echo Reply.
- You measure how long the whole exchange takes.

The time taken for the message to travel to the destination and the reply to return is called round-trip time.

## Beginner explanation

Ping is commonly used by network administrators and users to investigate connectivity problems.

It uses the Internet Control Message Protocol (ICMP).

A successful reply indicates that the destination responded to the Ping request. However, a missing reply does not always mean the destination is offline. A firewall or network policy may block ICMP messages.

## Technical explanation

Ping typically sends ICMP Echo Request messages to a destination IP address.

The destination may respond with ICMP Echo Reply messages.

The originating device measures the elapsed time between sending the request and receiving the reply.

This measurement is commonly expressed in milliseconds (ms).

Ping can help investigate:

- Network reachability
- Round-trip time
- Packet loss
- Possible network connectivity problems

## Important distinction

Ping does not measure available bandwidth.

It also does not prove that every application or service on the destination is working.

It tests a particular form of network communication and reports the response it receives.
