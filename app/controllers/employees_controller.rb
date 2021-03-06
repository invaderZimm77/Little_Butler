class EmployeesController < ApplicationController
  before_action :set_employee, only: %i[show update destroy]

  # GET /employees/1
  def show
    render json: @employee
  end

  # POST /employees
  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      @token = encode({ id: @employee.id })
      render json: {
        employee: @employee.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_employee
    @employee = Employee.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def employee_params
    params.require(:employee).permit(:email, :employee_id, :password)
  end
end
