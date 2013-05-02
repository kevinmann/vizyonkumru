class ChangeThumbnailField < ActiveRecord::Migration
  def up
  	rename_column :videos, :subtitle, :thumbnail
  end

  def down
  end
end
