class StudentsController < ApplicationController
  def create
  	print :class_id
  	@classe = Classe.find(params[:class_id])
  	@student = @classe.students.create(student_params)
  	redirect_to class_path(@classe)
  end

  private
  	def student_params
  	  params.require(:student).permit(:name, :age)
  	end
end
