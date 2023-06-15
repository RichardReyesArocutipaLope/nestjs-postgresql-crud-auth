import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";


export const RawHeaders= createParamDecorator(
    (data, ctx: ExecutionContext)=>{

        const req= ctx.switchToHttp().getRequest();
        const rawHeaders=req.rawHeaders;
        if (!rawHeaders) throw new InternalServerErrorException('rawHeaders not foun in request')

        return rawHeaders
    }
)