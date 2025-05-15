import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className="text-[12px] font-[500]">
                  Get upt to 50% off new season styles, limited time only
                </p>
              </div>

              <div className="col2 flex items-center justify-end">
                <ul>
                  <li className="list-none">
                    <Link href="/HelpCenter" className="text-[12px]">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
