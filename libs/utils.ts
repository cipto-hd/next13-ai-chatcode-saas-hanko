import { PROMODAL_ID } from "@/constants";

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const showProModal = (id: string = PROMODAL_ID) => {
  const dialog = document.getElementById(id) as HTMLDialogElement | null;

  dialog?.showModal();
};
