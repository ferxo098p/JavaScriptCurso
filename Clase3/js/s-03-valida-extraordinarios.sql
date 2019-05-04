create or replace trigger tr_valida_extraordinarios
	before insert 
	or update of calificacion 
	or delete 
	on estudiante_extraordinario
	for each row 
declare
	v_aprobado number(2,0);
begin
	case
		when inserting then
			select count(*) into v_aprobado
			from estudiante_inscrito ei 
			join curso c 
			on ei.curso_id = c.curso_id
			where c.asignatura_id = :new.asignatura_id
			and ei.calificacion >= 6
			and ei.estudiante_id = :new.estudiante_id;

			if v_aprobado = 0 then
				dbms_output.put_line('Validación correcta: Inserción permitida');
			elsif v_aprobado > 1 then
				raise_application_error(-20001, 'ERROR: Estudiante aprobado más de una vez');
			--Se encontro el valor 1, count nunca regresa negativo
			else
				raise_application_error(-20010, 'ERROR : El estudiante '
					|| :new.estudiante_id
					|| 'ya aprobó la asignatura'
					|| :new.asignatura_id); 
			end if; 
		when updating('calificacion') then
			insert into auditoria_extraordinario(auditoria_extraordinario_id,
				fecha_cambio, usuario, calificacion_anterior, calificacion_nueva, estudiante_id, asignatura_id)
			values(auditoria_extraordinario_seq.nextval, sysdate,
				sys_context('USERENV','SESSION_USER'), :old.calificacion,
				:new.calificacion, :new.estudiante_id, :new.asignatura_id);
		when deleting then
			raise_application_error(-20011, 'ERROR: No se permiten eliminar extraordinarios');
	end case;
end;
/
show errors