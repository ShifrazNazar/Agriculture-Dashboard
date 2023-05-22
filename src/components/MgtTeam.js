import React from "react";

const data = [
  {
    id: 1,
    name: "Jon Snow",
    age: 35,
    phoneNumber: "(665)121-5454",
    email: "jonsnow@gmail.com",
    accessLevel: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    age: 42,
    phoneNumber: "(421)314-2288",
    email: "cerseilannister@gmail.com",
    accessLevel: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    age: 45,
    phoneNumber: "(422)982-6739",
    email: "jaimelannister@gmail.com",
    accessLevel: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    age: 16,
    phoneNumber: "(921)425-6742",
    email: "anyastark@gmail.com",
    accessLevel: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    age: 31,
    phoneNumber: "(421)445-1189",
    email: "daenerystargaryen@gmail.com",
    accessLevel: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    age: 150,
    phoneNumber: "(232)545-6483",
    email: "evermelisandre@gmail.com",
    accessLevel: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    age: 44,
    phoneNumber: "(543)124-0123",
    email: "ferraraclifford@gmail.com",
    accessLevel: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    age: 36,
    phoneNumber: "(222)444-5555",
    email: "rossinifrances@gmail.com",
    accessLevel: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    age: 65,
    phoneNumber: "(444)555-6239",
    email: "harveyroxie@gmail.com",
    accessLevel: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    age: 42,
    phoneNumber: "(421)314-2288",
    email: "cerseilannister@gmail.com",
    accessLevel: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    age: 45,
    phoneNumber: "(422)982-6739",
    email: "jaimelannister@gmail.com",
    accessLevel: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    age: 16,
    phoneNumber: "(921)425-6742",
    email: "anyastark@gmail.com",
    accessLevel: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    age: 31,
    phoneNumber: "(421)445-1189",
    email: "daenerystargaryen@gmail.com",
    accessLevel: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    age: 150,
    phoneNumber: "(232)545-6483",
    email: "evermelisandre@gmail.com",
    accessLevel: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    age: 44,
    phoneNumber: "(543)124-0123",
    email: "ferraraclifford@gmail.com",
    accessLevel: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    age: 36,
    phoneNumber: "(222)444-5555",
    email: "rossinifrances@gmail.com",
    accessLevel: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    age: 65,
    phoneNumber: "(444)555-6239",
    email: "harveyroxie@gmail.com",
    accessLevel: "admin",
  },
];

const MgtTeam = () => {
  return (
    <div className="m-8">
      <h1 className="mb-4 text-2xl font-bold">Managing the Team Members</h1>
      <div className="max-h-96 overflow-y-auto">
      <table className="w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Phone Number
            </th>
            <th className="uppercasetracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Access Level
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="whitespace-nowrap px-6 py-4">{row.id}</td>
              <td className="whitespace-nowrap px-6 py-4">{row.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{row.age}</td>
              <td className="whitespace-nowrap px-6 py-4">{row.phoneNumber}</td>
              <td className="whitespace-nowrap px-6 py-4">{row.email}</td>
              <td className="whitespace-nowrap px-6 py-4">{row.accessLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MgtTeam;
