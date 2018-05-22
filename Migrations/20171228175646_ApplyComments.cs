using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace forum.Migrations
{
    public partial class ApplyComments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "Comments",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(int),
                oldMaxLength: 100);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Content",
                table: "Comments",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 100);
        }
    }
}
