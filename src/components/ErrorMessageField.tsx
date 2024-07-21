import { FC } from "react";

type ErrorMessageFieldProps = {
  messages: string[];
};

const ErrorMessageField: FC<ErrorMessageFieldProps> = ({ messages }) => {
  if (messages.length === 0) {
    return null;
  }
  return (
    <div className="error-messages p-4 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
      <ul className="list-disc pl-5">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessageField;
