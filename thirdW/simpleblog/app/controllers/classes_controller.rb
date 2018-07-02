class ClassesController < ApplicationController
  def index
  	@classes = Classe.all
  end

  def show
  	@classe = Classe.find(params[:id])
  end
  
  def new 
  	@classe = Classe.new
  end

  def create
  	@classe = Classe.new(classe_params)
  	if(@classe.save)
  	  redirect_to @classe
  	 else
  	 	render 'new'
  	 end
  end

  def edit
  	@classe = Classe.find(params[:id])
  end

  def update
  	@classe = Classe.find(params[:id])
  	if(@classe.update_attributes(classe_params))
  	  redirect_to @classe
  	else
  	  render 'edit'
  	end
  end

  def destroy
  	@classe = Classe.find(params[:id])
  	@classe.destroy
  	redirect_to classes_path
  end
  
  private
  	def classe_params
  	  params.require(:classe).permit(:title, :body)
  	end
end
