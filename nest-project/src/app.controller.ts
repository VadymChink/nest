import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Host')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @ApiOperation({
        description: 'This method tested working api',
        summary: 'Test point'
    })
    @ApiOkResponse({
        status: 200,
        schema: {
            example: 'Hello World'
        }
    })
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
