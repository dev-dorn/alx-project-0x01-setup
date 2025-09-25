import { UserModalProps, UserData, UserProps } from '@/interfaces';
import { useState } from 'react';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const initialFormData: UserData = {
        id: 0,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    };

    const [formData, setFormData] = useState<UserProps>(initialFormData);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData(initialFormData);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...((prev[parent as keyof UserData] ?? {}) as object),
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Add New User</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        type="button"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Basic Information</h3>
                            
                            {['name', 'username', 'email', 'phone', 'website'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        {field} {['name', 'username', 'email', 'phone'].includes(field) && '*'}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'website' ? 'url' : 'text'}
                                        name={field}
                                        value={formData[field as keyof UserData] as string}
                                        onChange={handleChange}
                                        required={['name', 'username', 'email', 'phone'].includes(field)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={`Enter ${field}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Address and Company */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Address & Company</h3>
                            
                            {['street', 'suite', 'city', 'zipcode'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        name={`address.${field}`}
                                        value={typeof formData.address[field as keyof typeof formData.address] === 'string'
                                            ? formData.address[field as keyof typeof formData.address] as string
                                            : ''}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={`Enter ${field}`}
                                    />
                                </div>
                            ))}

                            {['name', 'catchPhrase'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        Company {field}
                                    </label>
                                    <input
                                        type="text"
                                        name={`company.${field}`}
                                        value={formData.company[field as keyof typeof formData.company]}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={`Enter company ${field}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;