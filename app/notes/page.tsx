import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getClaims();
	if (error || !data?.claims) {
		redirect("/auth/login");
	}

	<h1>Hidden data behind login!</h1>;

	/*
	const { datos, e} = await supabase.from("demo").select("message");
	if (e) {
		throw new Error(e.message);
	}
	console.log(JSON.stringify(datos, null, 2));

	return <pre>{JSON.stringify(datos, null, 2)}</pre>;
	*/
}
