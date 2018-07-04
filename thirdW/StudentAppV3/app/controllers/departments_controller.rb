class DepartmentsController < ApplicationController
  
  def index
  	@departments = Department.all
  end

  def show
  	@department = Department.find(params[:id])
  end

  def new
  	@department = Department.new
  end

  def create
  	@departments = Department.all
  	@department = Department.create(department_params)
  end

  def edit
  	@department = Department.find(params[:id])
  end

  def update
  	@departments = Department.all
  	@department = Department.find(params[:id])
  	@department.update_attributes(department_params)
  end

  def delete
  	@department = Department.find(params[:department_id])
  end

  def destroy
  	@departments = Department.all
  	@department = Department.find(params[:id])
  	@department.destroy
  end

  private
  	def department_params
  	  params.require(:department).permit(:title, :body)
  	end
end
