class HomepageController < ApplicationController

  def index
    @test= "test"
    @videos = Video.all
  end

end