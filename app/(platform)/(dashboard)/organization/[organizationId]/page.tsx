import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationIdPage = async () => {
    const {userId,orgId} = auth();

  return (
    <div>
      <OrganizationSwitcher 
        hidePersonal
      />
    </div>
  )
}

export default OrganizationIdPage;