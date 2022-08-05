import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from "@nestjs/common";
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import * as fs from 'fs';
import {join} from 'path';

import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //swagger
    const swaggerDescription = await fs.readFileSync(join(__dirname, '..', '..', 'description.markdown'))
    const config = new DocumentBuilder()
        .setTitle('Dec21')
        .setDescription(swaggerDescription.toString())
        .setVersion('1.0')
        .addTag('december')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    //end swagger


    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000, () => {
        console.log('started')
    });
}

bootstrap();
