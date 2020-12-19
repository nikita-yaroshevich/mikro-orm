---
id: "serverexception"
title: "Class: ServerException"
sidebar_label: "ServerException"
---

Base class for all server related errors detected in the driver.

## Hierarchy

* [DriverException](driverexception.md)

  ↳ **ServerException**

  ↳↳ [ConstraintViolationException](constraintviolationexception.md)

  ↳↳ [DatabaseObjectExistsException](databaseobjectexistsexception.md)

  ↳↳ [DatabaseObjectNotFoundException](databaseobjectnotfoundexception.md)

  ↳↳ [DeadlockException](deadlockexception.md)

  ↳↳ [InvalidFieldNameException](invalidfieldnameexception.md)

  ↳↳ [LockWaitTimeoutException](lockwaittimeoutexception.md)

  ↳↳ [NonUniqueFieldNameException](nonuniquefieldnameexception.md)

  ↳↳ [ReadOnlyException](readonlyexception.md)

  ↳↳ [SyntaxErrorException](syntaxerrorexception.md)

## Constructors

### constructor

\+ **new ServerException**(`previous`: [Error](driverexception.md#error)): [ServerException](serverexception.md)

*Inherited from [DriverException](driverexception.md).[constructor](driverexception.md#constructor)*

*Defined in [packages/core/src/exceptions.ts:10](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`previous` | [Error](driverexception.md#error) |

**Returns:** [ServerException](serverexception.md)

## Properties

### code

• `Optional` **code**: string

*Inherited from [DriverException](driverexception.md).[code](driverexception.md#code)*

*Defined in [packages/core/src/exceptions.ts:6](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L6)*

___

### errmsg

• `Optional` **errmsg**: string

*Inherited from [DriverException](driverexception.md).[errmsg](driverexception.md#errmsg)*

*Defined in [packages/core/src/exceptions.ts:10](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10)*

___

### errno

• `Optional` **errno**: number

*Inherited from [DriverException](driverexception.md).[errno](driverexception.md#errno)*

*Defined in [packages/core/src/exceptions.ts:7](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L7)*

___

### message

•  **message**: string

*Inherited from [DriverException](driverexception.md).[message](driverexception.md#message)*

*Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string

*Inherited from [DriverException](driverexception.md).[name](driverexception.md#name)*

*Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:973*

___

### sqlMessage

• `Optional` **sqlMessage**: string

*Inherited from [DriverException](driverexception.md).[sqlMessage](driverexception.md#sqlmessage)*

*Defined in [packages/core/src/exceptions.ts:9](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L9)*

___

### sqlState

• `Optional` **sqlState**: string

*Inherited from [DriverException](driverexception.md).[sqlState](driverexception.md#sqlstate)*

*Defined in [packages/core/src/exceptions.ts:8](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L8)*

___

### stack

• `Optional` **stack**: string

*Inherited from [DriverException](driverexception.md).[stack](driverexception.md#stack)*

*Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:975*