import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const databaseConfig: TypeOrmModuleOptions = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'employee',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
}