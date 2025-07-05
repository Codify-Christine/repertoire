import React from "react";
import { HelpCircle, Mail, Info } from "lucide-react";

const HelpAndSupport = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-10">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">Help & Support</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <HelpCircle size={18} />
          User Guide
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} />
          Contact Support
        </div>
        <div className="flex items-center gap-2">
          <Info size={18} />
          FAQ
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
