import React from 'react';

const UserInquiryCard: React.FC = () => {
  return (
    <div className="card bg-white shadow-sm rounded-3xl overflow-hidden">
      <div className="card-header w-full flex justify-between items-center p-6 bg-white">
        <h4 className="font-grandis font-medium lg:text-xl md:text-lg text-base">
          Recent User Inquiry
        </h4>
        <div className="flex items-center font-grandis md:text-base text-sm">
          <span className="block w-16 font-normal">Sort by</span>
          <select
            defaultValue="Daily"
            className="select select-ghost font-medium w-24 outline-0 font-grandis"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      <div className="card-body p-6">
        <div>
          <figure className="justify-start mb-4">
            <img src="/assets/images/user-inquiry.svg" alt="No inquiries" />
          </figure>
          <h4 className="font-grandis font-medium text-lg text-neutral-700 mb-1">
            No User Inquiry
          </h4>
          <p className="font-grandis text-base font-normal leading-5 text-[#b1b1b1]">
            No new user inquiries found. By default, user inquiries are turned off. To enable them, navigate to your AI Agent settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInquiryCard;