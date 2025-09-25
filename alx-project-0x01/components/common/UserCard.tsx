import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({user }) => {
    return (
        <div className="max-w-sm mx-auto my-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {user.name.charAt(0)}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                    <p className="text-blue-600 font-medium">@{user.username}</p>
                    <p className="text-gray-600 text-sm mt-2">{user.email}</p>
                </div>
                
                <div className="mt-4 border-t pt-4">
                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Address:</span>
                        <p className="text-sm text-gray-600">
                            {user.address.street}, {user.address.suite}<br/>
                            {user.address.city}, {user.address.zipcode}
                        </p>
                    </div>
                    
                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Phone:</span>
                        <p className="text-sm text-gray-600">{user.phone}</p>
                    </div>
                    
                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Website:</span>
                        <a href={`http://${user.website}`} className="text-blue-500 text-sm hover:underline">
                            {user.website}
                        </a>
                    </div>
                    
                    <div>
                        <span className="font-semibold text-gray-700">Company:</span>
                        <p className="text-sm font-medium text-gray-800">{user.company.name}</p>
                        <p className="text-xs text-gray-600 italic">{user.company.catchPhrase}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;