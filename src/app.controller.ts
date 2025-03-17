import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-db')
  async testDatabase() {
    try {
      // Intenta hacer una consulta simple
      const result = await this.prisma.$queryRaw`SELECT 1`;
      return { success: true, message: 'Conexión a la base de datos exitosa', result };
    } catch (error) {
      return { success: false, message: 'Error al conectar con la base de datos', error: error.message };
    }
  }

  @Get('usuarios')
  async getAllUsuarios() {
    try {
      const usuarios = await this.prisma.usuarios.findMany();
      return {
        success: true,
        message: 'Usuarios obtenidos exitosamente',
        data: usuarios
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error al obtener los usuarios',
        error: error.message
      };
    }
  }
}
