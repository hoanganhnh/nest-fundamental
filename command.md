- Creating a basic Controller: `nest g co` and `nest g co --no-spec`

- Creating a basic Service: `nest g s`

- Creating module: `nest g module <name-module>`

- Creating dto : `nest g class coffees/dto/create-coffee.dto --no-spec`

```javascript
// validate field with dto
// npm i class-validator class-transformer
app.useGlobalPipes(new ValidationPipe());
```

- postgresql with nest: `npm i @nestjs/typeorm typeorm pg`
