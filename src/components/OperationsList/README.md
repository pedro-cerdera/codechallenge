# OperationsList

Show all user operations in app

## Usage

```js

const operations = [
    {
      id: '1',
      icon: 'fa-plus-circle',
      title: 'Nova Transação',
      onPress: () => {},
    },
    {
      id: '2',
      icon: 'fa-list',
      title: 'Listar Transações',
      onPress: () => {},
    },
  ];
  
const Example = () => (<OperationsList operations={operations} />);
```

### Properties

| Prop                    | Description                      | Required      | Default | Format | 
| ----------------------- | ---------------------------------| ------------- | ------- | ------ |
| **`operations`**        | Array of all operations          | true.         | none    | [{id: string, icon: string, title: string, onPress: function}] |
