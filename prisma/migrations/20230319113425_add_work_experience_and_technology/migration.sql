-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "type" TEXT,
    "employer" TEXT,
    "address" TEXT,
    "website" TEXT,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "website" TEXT,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TechnologyToWorkExperience" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TechnologyToWorkExperience_AB_unique" ON "_TechnologyToWorkExperience"("A", "B");

-- CreateIndex
CREATE INDEX "_TechnologyToWorkExperience_B_index" ON "_TechnologyToWorkExperience"("B");

-- AddForeignKey
ALTER TABLE "_TechnologyToWorkExperience" ADD CONSTRAINT "_TechnologyToWorkExperience_A_fkey" FOREIGN KEY ("A") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TechnologyToWorkExperience" ADD CONSTRAINT "_TechnologyToWorkExperience_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkExperience"("id") ON DELETE CASCADE ON UPDATE CASCADE;
