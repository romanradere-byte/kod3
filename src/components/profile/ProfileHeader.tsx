"use client";

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 flex items-center gap-6">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
        U
      </div>

      <div>
        <div className="text-xl font-bold">Користувач</div>
        <div className="text-gray-500 text-sm">Демо-акаунт</div>
      </div>
    </div>
  );
}
