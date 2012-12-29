class Video < ActiveRecord::Base
  attr_accessible :caption, :category_id, :downloadable, :featured, :link, :share_code, :subtitle, :title, :user_id
end
