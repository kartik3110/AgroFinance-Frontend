import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Header } from "../../components";
import MySidebar from "../../components/MySidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingEditProfilePage() {
  return (
    <>
      <Helmet>
        <title>AgroFinance</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-gray-100">
        <MySidebar className="w-[252px] h-screen top-0 bg-white-A700 !sticky" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]">
          <Header title="Edit Profile" />
          <div className="flex flex-row justify-center w-[94%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[51px] p-[30px] sm:p-5 bg-white-A700 rounded-[25px]">
              <div className="flex flex-col items-start justify-start w-full mt-1.5">
                <div className="flex flex-row sm:flex-col justify-start items-start w-[39%] md:w-full sm:gap-5 z-[1]">
                  <div className="flex flex-col items-center justify-start sm:w-full gap-2">
                    <Text as="p" className="!text-indigo-600_01 !font-medium">
                      Personal Details
                    </Text>
                    <div className="h-[3px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-indigo-600_01" />
                  </div>
                </div>
                <div className="h-px w-full mt-[-1px] bg-gray-300" />
              </div>
              <div className="flex flex-col md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-row justify-center w-[13%] md:w-full mt-[3px] md:mt-0"></div>
                <div className="flex flex-col items-end justify-start w-[83%] md:w-full">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">First Name</Text>
                      <Input
                        shape="round"
                        name="name"
                        placeholder="Charlene Reed "
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Last Name</Text>
                      <Input
                        shape="round"
                        name="userName"
                        placeholder="Charlene Reed "
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Email</Text>
                      <Input
                        shape="round"
                        name="email"
                        placeholder="user@gmail.com "
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Password</Text>
                      <Input
                        shape="round"
                        type="password"
                        name="password"
                        placeholder="**********"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Phone Number</Text>
                      <Input
                        shape="round"
                        name="phone"
                        placeholder="XXXXXXXXXX"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Present Address</Text>
                      <Input
                        shape="round"
                        name="address"
                        placeholder="San Jose, California, USA"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Permanent Address</Text>
                      <Input
                        shape="round"
                        name="address"
                        placeholder="San Jose, California, USA"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[9px]">
                      <Text as="p">City</Text>
                      <Input
                        shape="round"
                        name="city"
                        placeholder="San Jose"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Postal Code</Text>
                      <Input
                        shape="round"
                        name="zipcode"
                        placeholder="45962"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[9px]">
                      <Text as="p">Country</Text>
                      <Input
                        shape="round"
                        name="country"
                        placeholder="USA"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <Button
                    color="indigo_600"
                    size="lg"
                    className="mt-[30px] sm:px-5 font-medium min-w-[190px] rounded-[15px] sm:min-w-full"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
