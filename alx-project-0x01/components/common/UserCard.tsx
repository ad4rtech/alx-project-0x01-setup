import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600">
        <span className="font-semibold">Email:</span> {email}
      </p>

      <p className="text-gray-600 mt-1">
        <span className="font-semibold">Phone:</span> {phone}
      </p>

      <p className="text-gray-600 mt-1">
        <span className="font-semibold">Website:</span> {website}
      </p>

      <p className="text-gray-600 mt-1">
        <span className="font-semibold">Company:</span> {company.name}
      </p>

      <p className="text-gray-600 mt-1">
        <span className="font-semibold">Address:</span>{" "}
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
