# TransactionForm
Show a Form for a Transaction

## Usage

```js  
const Example = () => {
const submitTransaction = useCallback(
    (value, description) => {
      console.log(value, description)
    },
    []
);

return(
  <TransactionForm onSubmit={submitTransaction} />
)};
```

### Properties

| Prop                    | Description                      | Required      | Default | Format | 
| ----------------------- | ---------------------------------| ------------- | ------- | ------ |
| **`onSubmit`**          | Submit function called when form is done | true          | none       | function |
