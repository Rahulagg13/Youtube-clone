import { Loader2 } from "lucide-react";
const Loader = () => {
  return (
    <div className="flex justify-center items-center animate-spin">
      <Loader2 size={48} />
    </div>
  );
};

export default Loader;
