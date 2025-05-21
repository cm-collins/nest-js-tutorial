import { Post } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { Role } from "./role.enum";

@Post()
@Roles(Role.Admin)
create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
}