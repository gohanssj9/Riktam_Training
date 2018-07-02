class StudentsController < ApplicationController
  def show
  	@student = Student.find(params[:id])
  end

  def index
  	@students = Student.all
  end

  def new
  	@student = Student.new #New User
  end

  def create
    @students = Student.all
  	@student = Student.create(student_params)
  end

  def edit
  	@student  = Student.find(params[:id])
  end

  def update
  	@students = Student.all
  	@student = Student.find(params[:id])

  	@student.update_attributes(student_params)
  end
  
  def delete
  	@student = Student.find(params[:student_id])
  end
  
  def destroy
  	@students = Student.all
  	@student = Student.find(params[:id])
  	@student.destroy
  end

  private
  	def student_params
  	  params.require(:student).permit(:name, :age)
  	end

end