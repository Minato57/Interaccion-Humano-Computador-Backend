import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Permiso } from './permiso.entity';
import { Usuario } from './usuario.entity';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  idRol: number;

  @Column({ type: 'character varying', length: 255 })
  nombre: string;

  @Column({ type: 'character varying', length: 255, nullable: true })
  descripcion: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
  createdAt: Date;

  @ManyToMany(() => Permiso, (permiso) => permiso.roles)
  @JoinTable({
    name: 'rol_permisos',
    joinColumn: { name: 'id_rol', referencedColumnName: 'idRol' },
    inverseJoinColumn: { name: 'id_permiso', referencedColumnName: 'idPermiso' }
  })
  permisos: Permiso[];

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}
