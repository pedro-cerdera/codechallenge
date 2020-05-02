# Input
Show user account resume

## Usage

```js  
const Example = () => {
const [value, setValue] = useState("");

return(
  <Input
    onChangeText={setValue}
    value={value}
    title={'Value'}
  />);
```

### Properties

| Prop                    | Description                      | Required      | Default | Format | 
| ----------------------- | ---------------------------------| ------------- | ------- | ------ |
| **`visible`**           | Visibility of component          | false         | true    | boolean |
| **`masked`**            | Set if use masked input          | false         | false   | boolean |
| **`type`**              | If input masked, select mask type | false        | none    | one of (credit-card, cpf, cnpj, zip-code, only-numbers, money, cel-phone, datetime, custom) |
| **`topSpacing`**        | Add a padding in top             | false         | false   | bolean |
| **`containerStyle`**    | style of container               | false         | none    | object |
| **`title`**             | Title of input                   | true          | none    | string |
| **`refProp`**           | A ref for input                  | false         | none    | function |
| **`error`**             | Error of input validation        | false         | none    | string |
| **`noMinHeight`**       | If input multiline and don`t want min height | false | none | boolean |

And all other text input props(https://reactnative.dev/docs/text#props)
