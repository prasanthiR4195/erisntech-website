import React from "react";
import TermBlock from "./TermBlock";
import "./TermOfPayment.css";

const TermOfPayment = () => {
  return (
    <div className="termof_payment_wrap">
      <div className="termof_banner">
        <h1>
          Term of <span>Payment</span>
        </h1>
      </div>
      <div className="termof_content">
        <TermBlock
          title=""
          desc="  This Service Agreement (“Agreement”) shall apply and govern the
          Statement of Work(s), project, letter of intent or any other document
          executed between Erisn Tech or any of its affiliates
          (“Consultant/Consultant”) and Customer, for the purpose of providing
          professional services (“Services”) or deliverables (“Deliverable”) for
          software development and IT services."
        />
        <TermBlock
          title="Payment"
          desc="Payment will be made by Customer within 30 days upon receipt of an
          invoice. In the event there is a delay in payment for more than 5 days
          from the due date, the Customer shall be liable to pay an interest of
          1.5% per month or maximum permitted by applicable law, whichever is
          less, on the delayed payments from the due date of payment. Consultant
          shall be relieved of its obligations under this Agreement in the event
          of non-payment of the Fees or expenses due and shall retain the rights
          in the Services for which the amount is outstanding."
        />
        <TermBlock
          title="Approval Process"
          desc="Customers will have 10 days following receipt of the Services or
           Deliverable (“Acceptance Period”), to complete acceptance tests as per
            acceptance criteria agreed. If n o notice of non-conformance to Acceptance
             Criteria is reported during Acceptance Period, Deliverables or Services
              are deemed accepted by the Customer."
        />
        <TermBlock
          title="Confidentiality"
          desc="Confidential information shall mean any information disclosed by
           one party to the other party, in any form including without limitation
            documents, business plans, source code, software, technical/ financial/ marketing/ customer/ business information, specifications, analysis, designs, drawings, data, computer programs, any information relating to personnel or Affiliates of a party and include information disclosed by third parties at the direction of a Disclosing Party and marked as confidential within 30 days of such disclosure."
          desc2="The Receiving Party agrees not to use any Confidential Information for any purpose except for conducting business with the Disclosing Party, or otherwise agreed in writing. Confidential information shall mean any information disclosed by one party to the other party, in any form including without limitation documents, business plans, source code, software, technical/ financial/ marketing/ customer/ business information, specifications, analysis, designs, drawings, data, computer programs, any information relating to personnel or Affiliates of a party and include information disclosed by third parties at the direction of a Disclosing Party and marked as confidential within 30 days of such disclosure."
        />
        <TermBlock
          title="Intellectual Property Rights"
          desc="Customers shall own all rights, title and interest in and to the
           Deliverables. The rights, title and interest in and to the Deliverables
            shall be granted to the Customer only upon receipt of full payment by the Consultant. To the extent that the Deliverables incorporates Consultant pre-existing intellectual proper- ty (“Consultant Pre-existing IP”), and such Consultant Pre-Existing IP are necessarily required for the proper functioning of the Deliverables Consultant gr- ants to Customer a perpetual, non-exclusive, worldwide, transferable, royalty-free license to use such Consultant Pre-Existing IP solely along with the Del- iverables."
        />
        <TermBlock
          title="Warranties"
          desc="Except as expressly stated in this Agreement, the parties disclaim all warranties of any kind, implied, statutory, or in any communication between them, including without limitation, the implied warranties of merchantability, non-infringement, title, and fitness for a particular purpose."
        />
        <TermBlock
          title="Limitation of Liability"
          desc="The total liability of the parties under this Agreement (whether in contract, tort (including negligence)) shall not exceed the fees paid to Consultant hereu- nder. The parties disclaim any indirect, special, consequential or incidental damages or loss of revenue or business profits, however caused, even if advised of the possibility of such damages. The foregoing limitations of liability will apply not with standing the failure of essential purpose of any limited remedy herein."
        />
        <TermBlock
          title="Termination"
          desc="Either party may terminate the Agreement upon sixty (60) days’ notice to the other party. Either party may terminate this Agreement immediately if the other party breaches the terms of this Agreement and the breach remains uncured for 30 days from the date of receipt of notice. In case of termination, the Consultant shall be paid for the Services provided on a pro-rata basis."
        />
        <TermBlock
          title="Governing Law and Dispute Resolution"
          desc="The terms of this Agreement shall be governed, interpreted and construed in accordance with the laws of India."
        />
        <TermBlock
          title="Entire Agreement"
          desc="This Agreement shall constitute the complete agreement between the parties respecting the subject matter. This Agreement may not be extended, amended, terminated, or superseded except by agreement in writing between the parties. This Agreement supersedes all previous agreements between the Consultant and the Customer, whether oral or written, regarding subject matter hereof, standard terms and conditions of a purchase order or an invoice or any similar document whether hosted on a party’s website or otherwise, shall be ineffective. There are no intended third party beneficiaries to this Agreement. Each Agreement may be executed in one or more counterparts (including scanned copies), all of which when signed and taken together constitute a single agreement between the parties."
        />
      </div>
    </div>
  );
};

export default TermOfPayment;
