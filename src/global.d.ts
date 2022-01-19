/// <reference types="@sveltejs/kit" />

import { createConnection } from "typeorm";
import { dev } from "$app/env";

const connection = await createConnection("dev");