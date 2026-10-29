import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(employeeData: Partial<Employee>) {
    const employee = this.employeeRepository.create(employeeData);

    return await this.employeeRepository.save(employee);
  }

  async getAllEmployees() {
    return await this.employeeRepository.find();
  }

  async getEmployeeById(id: number) {
    return await this.employeeRepository.findOne({
      where: { id },
    });
  }

  async updateEmployee(
    id: number,
    employeeData: Partial<Employee>,
  ) {
    const employee = await this.employeeRepository.findOne({
      where: { id },
    });

    if (!employee) {
      return null;
    }

    Object.assign(employee, employeeData);

    return await this.employeeRepository.save(employee);
  }

  async deleteEmployee(id: number) {
    const result = await this.employeeRepository.delete(id);

    return (result.affected ?? 0) > 0;
  }
}