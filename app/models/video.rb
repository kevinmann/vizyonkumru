class Video < ActiveRecord::Base
  belongs_to :category
  belongs_to :user

  attr_accessible :caption, :category_id, :downloadable, :featured, :link, :share_code, :thumbnail, :title, :user_id, :video_type
end
