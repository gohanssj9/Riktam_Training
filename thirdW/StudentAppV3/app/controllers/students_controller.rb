class StudentsController < ApplicationController
  #respond_to :html, :js, :json
  def index
  	@department = Department.find(params[:id])
  	@students = @department.students.all
  end

  def show
  	@department = Department.find(params[:id])
    @student = @department.students.find(params[:department_id])
    # respond_to do |format|
    #   format.html {redirect_to department_student(@department, @student), notice: 'Student Show'}
    #   format.json {render action: 'show', status: :created, location: @student}
    #   format.js {render action: 'show', status: :created, location: @student}
    # end
  end

  def new
  	@department = Department.find(params[:department_id])
  	@student = @department.students.new
  end

  def create
  	@department = Department.find(params[:department_id])
    @students = @department.students
  	@student = @students.new(student_params)
    if(@student.save) 
      redirect_to "/departments"
    else 
      render 'index'
    end
  end

  def edit
    @department = Department.find(params[:id])
    @student = @department.students.find(params[:department_id])
  end

  def update
    @department = Department.find(params[:id])
    @student = @department.students.find(params[:department_id])
    @student.update_attributes(student_params)
    redirect_to "/departments"
  end

  def delete
    @department = Department.find(params[:id])
  	@student = @department.students.find(params[:department_id])
  end

  def destroy
    @department = Department.find(params[:id])
  	@students = @department.students
  	@student = @students.find(params[:department_id])
  	@student.destroy
    redirect_to "/departments"
  end

  private
  	def student_params
  	  params.require(:student).permit(:name, :age)
  	end
end
