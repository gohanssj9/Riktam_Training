class StudentsController < ApplicationController
  def show
  	@student = Student.find(params[:id])
  end

  def index
  	@student = Student.all
  end

  def new
  	@student = Student.new #New User
  end

  def create
    @student = Student.new(student_params)
  	if @student.save
  	  flash[:success] = "Record created !"
  	  redirect_to action: "index"
  	else 
  	  render 'new'
  	end
  end

  def edit
  	@student  = Student.find(params[:id])
  end

  def update
  	@student = Student.find(params[:id])
  	if @student.update_attributes(student_params)
  	  flash[:success] = "Record Updated !"
  	  redirect_to action: "index"
  	else 
  	  render 'edit'
  	end
  end
  
  def destroy
  	@student = Student.find(params[:id])
  	@student.destroy
  	redirect_to action: "index"
  end

  private
  	def student_params
  	  params.require(:student).permit(:name, :age)
  	end

end
