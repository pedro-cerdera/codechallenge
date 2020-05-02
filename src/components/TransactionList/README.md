# TransactionList

Show all user operations in app

## Usage

```js

const transactions = [
    {
     value: 200,
     description: "Transaction 1" 
    },
    {
      value: 300,
      description: "Transaction 2" 
    },
  ];
  
const Example = () => (<TransactionList transactions={transactions} />);
```

### Properties

| Prop                    | Description                      | Required      | Default | Format | 
| ----------------------- | ---------------------------------| ------------- | ------- | ------ |
| **`transactions`**      | Array of all transactions        | true.         | none    | [{value: number, description: string}] |
