package com.jarquin.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "person", schema = "bd_jarquin")

public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @JsonFormat(pattern = "dd-MM-yyyy")
    @Column(name = "fechanacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "puesto")
    private String puesto;

    @Column(name = "sueldo", precision = 10, scale = 2)
    private BigDecimal sueldo;

}