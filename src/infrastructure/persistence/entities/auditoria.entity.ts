import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('auditoria')
export class Auditoria {
  @PrimaryGeneratedColumn({ name: 'id_auditoria' })
  idAuditoria: number;

  @Column({ name: 'id_usuario', type: 'integer' })
  idUsuario: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.auditorias)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @CreateDateColumn({ name: 'fecha', type: 'timestamp without time zone' })
  fecha: Date;

  @Column({ type: 'character varying', length: 255 })
  accion: string;

  @Column({ type: 'character varying', length: 255, nullable: true })
  modulo: string;

  @Column({ name: 'ip_address', type: 'character varying', length: 50, nullable: true })
  ipAddress: string;
}
