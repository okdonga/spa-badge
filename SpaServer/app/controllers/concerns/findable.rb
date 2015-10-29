module Findable
  extend ActiveSupport::Concern

  def set_student
    @student = Student.find(params[:student_id])
  end

end
