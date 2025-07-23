import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getClaims();
	if (error || !data?.claims) {
		redirect("/auth/login");
	}

	let { data: tabla, error: err } = await supabase.from("demo").select("message");
	if (err) {
		throw new Error(err.message);
	}
	console.log(JSON.stringify(tabla, null, 2));

	return <pre>{JSON.stringify(tabla, null, 2)}</pre>;
}
